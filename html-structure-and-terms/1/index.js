/**
 * Tìm hiểu tại sao các thẻ liên quan đến CSS thường được đặt trong <head> còn JavaScript lại đặt ở cuối của <body> (trước khi đóng </body>)
 * Giải thích theo ý hiểu của bạn ở dưới, không hiểu có thể hỏi trên Coders.Tokyo Slack hoặc JsLand 
 * Trả lời:
 * - khi load page, file html sễ được load từ trên xuống dưới
 * - files style đặt trong <head> sẽ được load trước, các định dạng style (element, id, class, ...) đã được định nghĩa khi load đến các thẻ elements sẽ hiện thị ra ngay
 * - files JavaScript đặt ở cuối của <body> để giảm khoảng thời gian phải load file javascript (do trong thời gian load file màn hình sẽ hiện trang trắng), ưu tiên hiển thị nội dung trước, file javascript có thể sẽ tương tác với các elements nên cần phải load các elements trước
 */