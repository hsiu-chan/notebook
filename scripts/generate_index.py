from github import Github
from jinja2 import Template
import os

# 可使用 GITHUB_TOKEN 避免 API 限制
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", None)
g = Github(GITHUB_TOKEN)

repo = g.get_repo("hsiu-chan/notebook")  # 替換成你的 repo
notes_path = "notes"

# 抓取 notes 目錄
contents = repo.get_contents(notes_path)
dirs = []

for item in contents:
    if item.type == "dir":
        files = [f for f in repo.get_contents(item.path) if f.name.endswith(".html")]
        dirs.append({"name": item.name, "files": files})

# 讀取模板
with open("templates/index.html", "r", encoding="utf-8") as f:
    template_str = f.read()

template = Template(template_str)

# 渲染 HTML
html = template.render(dirs=dirs)

# 確保 _includes 資料夾存在
os.makedirs("_includes", exist_ok=True)

# 輸出到 _includes/index.html
output_path = os.path.join("_includes", "index.html")
with open(output_path, "w", encoding="utf-8") as f:
    f.write(html)

print(f"✅ index.html generated successfully at {output_path}!")
