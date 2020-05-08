/**
 * Tìm hiểu các method của document:
 * - getElementsByClassName
 * - getElementsByTagName
 * - querySelector
 * - querySelectorAll
 * Trả lời:
 * method getElementsByClassName() trả về một HTMLCollection object gồm tất cả những elements có tên class giống tên class tìm kiếm nằm trong file html (chứa code javascript).
 * vd: var x = document.getElementsByClassName("myClass");
 * - lấy tất cả những element có class là myClass trong file html.
 * x[0].innerHTML;
 * - lấy giá trị nội dung element
 * x[0].innerHTML = 'my content';
 * - thay đổi nội dung element.
 * x[0].style.color = 'red';
 * - thay đổi style element.
 * method getElementsByTagName() trả về môt HTMLCollection object gồm tất cả những elements có tên tag (tên thẻ element) giống tên tag tìm kiếm nằm trong file html.
 * vd: var x = document.getElementsByTagName("p");
 * - lấy tất cả những element p trong file html.
 * - truyền vào "*" sẽ select tất cả elements.
 * querySelector() method trả về element đầu tiên trùng với tham số truyền vào (CSS selectors)
 * vd: document.querySelector("p");
 * - lấy element p đầu tiên.
 * querySelectorAll() method trả về một static Nodelist object gồm tất cả những elements trùng với tham số truyền vào (CSS selectors)
 * vd: var x = document.querySelectorAll("p");
 * - lấy tất cả element p.
 */