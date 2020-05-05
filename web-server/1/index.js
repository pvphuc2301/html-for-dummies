/**
 * 1. Ngoài static-server thì còn có những node package nào có thể tạo 1 web server
 * Gợi ý: Lên https://www.npmjs.com/ search với từ khoá web server hoặc static server hoặc server
 * 2. Thử dùng 1 vài công cụ khác static-server để tạo web server
 * 3. Ghi lại các cách mà bạn đã làm ở bước 2, càng cụ thể càng tốt.
 * 4. Bạn có biết cách start 1 web server rất nhanh với dòng lệnh như php hoặc python, thử tìm hiểu.
 * 5. Ghi lại cách mà bạn tìm kiếm ở bước 4
 * Mục đích của bài tập này giúp cho bạn tập tìm kiếm tài liệu với từ khoá đã biết
 * Trả lời:
 * 1. lite-server, ecstatic, http-server, ...
 * 
 */

 /**
  * 1. mở terminal gõ lệnh bên dưới để cài đặt http-server 
  * npm install http-server -g
  * 2. tạo folder chứa các file index.html, index.js, v.v
  * 3. trở lại terminal gõ lệnh bên dưới để khởi động server
  * http-server [path] [option]
  * path: đường dẫn đến thư mục chứa file index.html
  * option:
  *     port mặc định là 8080, để thay đổi port thêm -p vào câu lệnh
  * 4. mở trình duyệt và truy cập vào http://localhost:8080
  * ---------------------------------------------------------------
  * - cách start 1 web server với python
  * - vào google search "start a web server with python"
  * - vào những trang xuất hiện ở kết quả tìm kiếm của google, tìm những trang có mô tả chi tiết về cách cài đặt và sử dụng (http://duspviz.mit.edu/tutorials/localhost-servers/)
  * - mở command line (Terminal trên Mac, Command Prompt trên Windows) gõ lệnh python -V để kiểm tra python đã cài đặt chưa
  * - cd vào đường dẫn folder chứa file index.html
  * - gõ lệnh python -m SimpleHTTPServer
  * - câu lệnh trên sẽ tạo một server cổng 8000
  * - mở trình duyệt truy cập vào địa chỉ http://localhost:8000
  * - để thay đổi port (vd: đổi thành 8080) sử dụng câu lệnh sau: python -m SimpleHTTPServer 8080
  * - để dừng server sử dụng tổ hợp phím Ctrl + C 
  * 
  * - sử dụng xampp tạo server trên localhost
  * 1. vào https://www.apachefriends.org/index.html để download và cài đặt phần mềm xampp
  * 2. thực hiện các bước sau để tạo 1 web server
  * trên windows:
  *     - Mở phần mềm xampp và xem Control Panel.
  *     - Start Apache bằng cách click vào nút Start.
  *     - Click Explorer để xem cấu trúc file localhost server.
  *     - Click vào folder htdocs. tài liệu HTML và PHP nằm ở đây
  *     - Tạo mới folder trong htdocs, ví dụ my-site.
  *     - Để nội dung website vào folder my-site.
  *     - Truy cập vào địa chỉ http://localhost/my-site.
  * trên Mac:
  *     - Mở phần mềm xampp và click vào tab "Manage Servers".
  *     - Click start trên lựa chọn Apache Web Server
  *     - Trong Finder, đi đến folder Xampp và mở folder htdocs.
  *     - Trong htdocs, tạo mới folder đặt tên là my-site.
  *     - Để nội dung website vào folder my-site.
  *     - Truy cập vào địa chỉ http://localhost/my-site.
  * 
  */