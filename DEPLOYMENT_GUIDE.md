services:
  - type: web
    name: priyanshu-portfolio
    env: static
    buildCommand: echo "No build required for static site"
    staticPublishPath: .
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
