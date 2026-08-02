const fs = require('fs');
const file1 = 'd:\\ql-khach-san-final\\ql-khach-san-final\\client\\src\\pages\\Payment.jsx';
let content = fs.readFileSync(file1, 'utf8');

const replacements = [
    ['Khong lay duoc gio hang', 'Không lấy được giỏ hàng'],
    ['Ma giam gia hop le!', 'Mã giảm giá hợp lệ!'],
    ['Ma giam gia khong hop le', 'Mã giảm giá không hợp lệ'],
    ['Vui long dien day du thong tin', 'Vui lòng điền đầy đủ thông tin'],
    ['Dang xu ly thanh toan...', 'Đang xử lý thanh toán...'],
    ['Co loi xay ra', 'Có lỗi xảy ra'],
    ['Dang tai thong tin...', 'Đang tải thông tin...'],
    ['Khong co phong nao trong gio hang', 'Không có phòng nào trong giỏ hàng'],
    ['Quay lai trang chu', 'Quay lại trang chủ'],
    ['Thong tin thanh toan', 'Thông tin thanh toán'],
    ['Vui long kiem tra thong tin va hoan tat thanh toan', 'Vui lòng kiểm tra thông tin và hoàn tất thanh toán'],
    ['Danh sach phong da chon', 'Danh sách phòng đã chọn'],
    ['phong</Tag>', 'phòng</Tag>'],
    ["'Phong'", "'Phòng'"],
    ['Phong {roomDetail', 'Phòng {roomDetail'],
    ['Tang {roomDetail', 'Tầng {roomDetail'],
    ['dem</span>', 'đêm</span>'],
    ['Ho va ten', 'Họ và tên'],
    ['Vui long nhap ho ten', 'Vui lòng nhập họ tên'],
    ['Nhap ho va ten day du', 'Nhập họ và tên đầy đủ'],
    ['Vui long nhap email', 'Vui lòng nhập email'],
    ['Email khong hop le', 'Email không hợp lệ'],
    ['Nhap dia chi email', 'Nhập địa chỉ email'],
    ['So dien thoai', 'Số điện thoại'],
    ['Vui long nhap so dien thoai', 'Vui lòng nhập số điện thoại'],
    ['Nhap so dien thoai', 'Nhập số điện thoại'],
    ['Ma giam gia (tuy chon)', 'Mã giảm giá (tùy chọn)'],
    ['Nhap ma giam gia', 'Nhập mã giảm giá'],
    ['Ap dung', 'Áp dụng'],
    ['Da ap dung ma', 'Đã áp dụng mã'],
    ['Giam {', 'Giảm {'],
    ['Phuong thuc thanh toan', 'Phương thức thanh toán'],
    ['Chon phuong thuc thanh toan', 'Chọn phương thức thanh toán'],
    ['Thanh toan khi den noi', 'Thanh toán khi đến nơi'],
    ['Coc 30% qua VNPay', 'Cọc 30% qua VNPay'],
    ['Dat coc truoc 30% tien phong', 'Đặt cọc trước 30% tiền phòng'],
    ['con lai thanh toan truc tiep tai khach san khi nhan phong.', 'còn lại thanh toán trực tiếp tại khách sạn khi nhận phòng.'],
    ['Thanh toan qua MoMo', 'Thanh toán qua MoMo'],
    ['Thanh toan nhanh chong qua vi MoMo', 'Thanh toán nhanh chóng qua ví MoMo'],
    ['Thanh toan qua VNPay', 'Thanh toán qua VNPay'],
    ['Thanh toan an toan qua VNPay', 'Thanh toán an toàn qua VNPay'],
    ['Xac nhan thanh toan', 'Xác nhận thanh toán'],
    ['Chi tiet thanh toan', 'Chi tiết thanh toán'],
    ['So phong da chon:', 'Số phòng đã chọn:'],
    ['Tong so dem:', 'Tổng số đêm:'],
    ['Tam tinh:', 'Tạm tính:'],
    ['Giam gia:', 'Giảm giá:'],
    ['Thue VAT (da bao gom):', 'Thuế VAT (đã bao gồm):'],
    ['0 d</span>', '0 đ</span>'],
    ['Tong cong:', 'Tổng cộng:'],
    ['Coc 30% (Thanh toan ngay):', 'Cọc 30% (Thanh toán ngay):'],
    ['Con lai (Tai khach san):', 'Còn lại (Tại khách sạn):'],
    ['Cho {cart', 'Cho {cart'],
    ['phong, {nights', 'phòng, {nights'],
    ['dem nghi</p>', 'đêm nghỉ</p>'],
    ['Luu y:', 'Lưu ý:'],
    ['Gia phong co the thay doi theo mua', 'Giá phòng có thể thay đổi theo mùa'],
    ['Huy phong mien phi truoc 24h nhan phong', 'Hủy phòng miễn phí trước 24h nhận phòng'],
    ['Dat coc 30% qua VNPay de xac nhan dat phong', 'Đặt cọc 30% qua VNPay để xác nhận đặt phòng']
];

replacements.forEach(([oldStr, newStr]) => {
    content = content.replaceAll(oldStr, newStr);
});

fs.writeFileSync(file1, content, 'utf8');

const file2 = 'd:\\ql-khach-san-final\\ql-khach-san-final\\client\\src\\pages\\PaymentSuccess.jsx';
let content2 = fs.readFileSync(file2, 'utf8');

const replacements2 = [
    ['Khong tim thay thong tin dat phong', 'Không tìm thấy thông tin đặt phòng'],
    ['Ve trang chu', 'Về trang chủ'],
    ['Dat coc thanh cong!', 'Đặt cọc thành công!'],
    ['Thanh toan thanh cong!', 'Thanh toán thành công!'],
    ['Ban da dat coc 30% thanh cong. Chung toi se lien he xac nhan dat phong.', 'Bạn đã đặt cọc 30% thành công. Chúng tôi sẽ liên hệ xác nhận đặt phòng.'],
    ['Cam on ban da dat phong. Chung toi se lien he xac nhan som nhat.', 'Cảm ơn bạn đã đặt phòng. Chúng tôi sẽ liên hệ xác nhận sớm nhất.'],
    ['Cho xac nhan', 'Chờ xác nhận'],
    ['Da xac nhan', 'Đã xác nhận'],
    ['Da huy', 'Đã hủy'],
    ['Hoan thanh', 'Hoàn thành'],
    ['Thong tin dat coc', 'Thông tin đặt cọc'],
    ['Tong tien dat phong:', 'Tổng tiền đặt phòng:'],
    ['Da dat coc', 'Đã đặt cọc'],
    ['Con lai can thanh toan tai khach san:', 'Còn lại cần thanh toán tại khách sạn:'],
    ['Vui long thanh toan phan con lai khi den nhan phong. Dat coc se duoc hoan tra neu huy truoc 24h.', 'Vui lòng thanh toán phần còn lại khi đến nhận phòng. Đặt cọc sẽ được hoàn trả nếu hủy trước 24h.'],
    ['Thong tin dat phong', 'Thông tin đặt phòng'],
    ['So phong da dat', 'Số phòng đã đặt'],
    ['phong</p>', 'phòng</p>'],
    ['Chi tiet phong:', 'Chi tiết phòng:'],
    ['Phong {room', 'Phòng {room'],
    ['Tang {room', 'Tầng {room'],
    ['Nhan:', 'Nhận:'],
    ['Tra:', 'Trả:'],
    ['Phuong thuc thanh toan', 'Phương thức thanh toán'],
    ['Thanh toan tai khach san (Da coc 30% qua VNPay)', 'Thanh toán tại khách sạn (Đã cọc 30% qua VNPay)'],
    ['Vi MoMo', 'Ví MoMo'],
    ['Ma giam gia', 'Mã giảm giá'],
    ['Thong tin khach hang', 'Thông tin khách hàng'],
    ['Ho va ten', 'Họ và tên'],
    ['So dien thoai', 'Số điện thoại'],
    ['Tong tien:', 'Tổng tiền:'],
    ['Da coc:', 'Đã cọc:'],
    ['Con lai tai khach san:', 'Còn lại tại khách sạn:'],
    ['Da ap dung ma giam gia:', 'Đã áp dụng mã giảm giá:'],
    ['Ma dat phong cua ban', 'Mã đặt phòng của bạn'],
    ['Vui long luu ma nay de tra cuu thong tin dat phong', 'Vui lòng lưu mã này để tra cứu thông tin đặt phòng'],
    ['Xem lich su dat phong', 'Xem lịch sử đặt phòng'],
    ['Dat phong khac', 'Đặt phòng khác'],
    ['Can ho tro?', 'Cần hỗ trợ?'],
    ['Lien he voi chung toi:', 'Liên hệ với chúng tôi:']
];

replacements2.forEach(([oldStr, newStr]) => {
    content2 = content2.replaceAll(oldStr, newStr);
});

fs.writeFileSync(file2, content2, 'utf8');

console.log("Done fixed language.");
