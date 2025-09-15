from github import Github
from jinja2 import Template
import os

# 如果需要，可設定 GitHub token，避免 rate limit
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", None)
g = Github(GITHUB_TOKEN)

repo = g.get_repo("hsiu-chan/notebook")  # 替換成你的 repo
notes_path = "notes"

# 抓取 notes 目錄
contents = repo.get_contents(notes_path)

dirs = []

for item in contents:
    if item.type == "dir":
        # 取得 HTML 檔案
        files = [f for f in repo.get_contents(item.path) if f.name.endswith(".html")]
        dirs.append({"name": item.name, "files": files})

# 讀取模板
with open("templates/index.html", "r", encoding="utf-8") as f:
    template_str = f.read()

template = Template(template_str)

# 渲染 HTML
html = template.render(dirs=dirs)

# 輸出到 _site/index.html（GitHub Pages 預設目錄）
os.makedirs("_site", exist_ok=True)
with open("_site/index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("✅ _site/index.html generated successfully!")
