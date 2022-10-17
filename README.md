# TypeSript cơ bản và promise khá quan trọng
## Cấu hình file tsconfig.json:

{
"compilerOptions": {
"target": "es6",
"module": "commonjs",
"declaration": true,
"sourceMap": true,
"experimentalDecorators": true,
"outDir": "dist",
"lib": ["es6", "dom"],
"noImplicitAny": true,
"suppressImplicitAnyIndexErrors": true,
"removeComments": true
},
"exclude": ["node_modules", "dist"]
}
## Tạo file package.json
{
"name": "typescript-is-shape",
"version": "1.0.0",
"dependencies": {
"typescript": "^4.1.5"
}
}

Mở cửa sổ terminal lên và chạy câu lệnh npm i để tải các thư viện typescript đã khai báo trong package.json ở trên về dự án
## Tạo src và viết code ts
Tiến hành chạy lệnh "tsc -p ./" trên terminal để chương trình build cả thư mục src sang file javascript
chạy lệnh "node ./dist/main.js" để hiển thị kết quả (log result)

