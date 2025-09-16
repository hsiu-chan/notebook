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
    for item in sorted(contents, key=lambda x: x.name.lower()):  # 自動排序
        if item.type == "dir":
            files = [f for f in repo.get_contents(item.path) if f.name.endswith(".html")]
            files = sorted(files, key=lambda x: x.name.lower())  # 文件也排序
            dirs.append({"name": item.name, "files": files})
else:
    # 本地模式（測試用）
    for item_name in sorted(os.listdir(notes_path), key=str.lower):
        item_path = os.path.join(notes_path, item_name)
        if os.path.isdir(item_path):
            files = [f for f in os.listdir(item_path) if f.endswith(".html")]
            files = sorted(files, key=str.lower)
            dirs.append({"name": item_name, "files": [{"name": f, "path": os.path.join(item_path, f)} for f in files]})

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
