// Các hàm tương tác di chuột và focus cũ
function upDate(previewPic) {
    console.log("Event triggered successfully!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    let displayDiv = document.getElementById("image");
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    let displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.style.color = "#FFFFFF";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

// Yêu cầu 8 & 9: Hàm khởi tạo tự động thêm thuộc tính tabindex khi tải trang
function initializeGallery() {
    // 9.a. Log thông báo ra console để kiểm tra xem sự kiện onload đã kích hoạt chưa
    console.log("Page loaded. Initializing gallery tab indexes...");

    // Lấy danh sách tất cả các ảnh có class là "preview"
    let images = document.getElementsByClassName("preview");

    // 9.b. Vòng lặp 'for' duyệt qua từng bức ảnh trong mảng
    for (let i = 0; i < images.length; i++) {
        // 9.c. Tự động gán thuộc tính tabindex="0" cho từng ảnh
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex to image " + (i + 1) + ": " + images[i].alt);
    }
}