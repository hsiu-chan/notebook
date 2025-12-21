from github import Github
from jinja2 import Template
import os
from datetime import datetime

# 可使用 GITHUB_TOKEN 避免 API 限制
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", None)
g = Github(GITHUB_TOKEN) if GITHUB_TOKEN else None

repo_name = "hsiu-chan/notebook"  # 替換成你的 repo
notes_path = "notes"

dirs = []

if g:
    # 從 GitHub API 抓取 notes 目錄
    repo = g.get_repo(repo_name)
    contents = repo.get_contents(notes_path)

    for item in contents:
        if item.type == "dir" and not item.name.startswith("."):
            files = [f for f in repo.get_contents(item.path) if f.name.endswith(".html")]
            files = sorted(files, key=lambda x: x.name.lower())  # 文件排序

            # 取得資料夾最新修改時間（取最新 file 的 updated_at）
            last_update = max([f.last_modified if hasattr(f, "last_modified") else f._rawData.get("git_url") for f in files], default=item._rawData.get("git_url"))
            dirs.append({"name": item.name, "files": files, "last_update": last_update})

    # 按資料夾最新修改時間排序（新到舊）
    dirs.sort(key=lambda d: d["last_update"], reverse=True)

else:
    # 本地模式
    for item_name in os.listdir(notes_path):
        if item_name.startswith("."):
            continue
        item_path = os.path.join(notes_path, item_name)
        if os.path.isdir(item_path):
            files = [f for f in os.listdir(item_path) if f.endswith(".html")]
            files = sorted(files, key=str.lower)
            # 取得資料夾最新修改時間
            last_update = max(os.path.getmtime(os.path.join(item_path, f)) for f in files) if files else os.path.getmtime(item_path)
            dirs.append({
                "name": item_name,
                "files": [{"name": f, "path": os.path.join(item_path, f)} for f in files],
                "last_update": last_update
            })
    # 按最新修改時間排序
    dirs.sort(key=lambda d: d["last_update"], reverse=True)

# 讀取模板
with open("templates/index.html", "r", encoding="utf-8") as f:
    template_str = f.read()

template = Template(template_str)

# 生成時間戳
generated_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# 渲染 HTML
html = template.render(dirs=dirs, generated_time=generated_time)

# 輸出到 repo 根目錄的 index.html
output_path = "index.html"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(html)

print(f"✅ index.html generated successfully at {output_path}!")
