import re

# Read about.html
with open('about.html', 'r', encoding='utf-8') as f:
    about_html = f.read()

# Let's inspect the hero and metrics section
p_hero_start = about_html.find('<!-- Page Hero Banner -->')
p_metrics_end = about_html.find('<!-- Main Content Section: Company Overview -->')

print("Hero & Metrics block length:", p_metrics_end - p_hero_start)
