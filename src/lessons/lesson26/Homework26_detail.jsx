import { useEffect, useState } from "react";
import { getUserWithPaginate } from "../../../docs/project/utils/apiService";
import User from './User';
/**
 * Sử dụng API (hàm đã viết sẵn để hiển thị danh sách users)
 * Cụ thể: sử dùng hàm getUserWithPaginate (page, limit) trong file apiService (đã import ở trên)
 * page chính là trang muốn lấy, limit là giới hạn số lượng bản ghi sẽ lấy
 * Ở đây, truyền vào mặc định là getUserWithPaginate (1, 3) để có dữ liệu
 */
const Homework26 = (props) => {
    const [data, setData] = useState([]);
    /**
     * Hiển thị list user lấy được ra view
     * Mỗi 1 user là 1 component
     * Về hiển thị hình ảnh base64, có thể tham khảo component Login, or Google keke ^^
     * Có thêm option để show/hide hình ảnh tại mỗi user
     * Tự CSS để có 1 giao diện 'tương đối' và dễ nhìn ^^
     */

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        let res = await getUserWithPaginate(1, 3);
        if (res && res.EC === 0) {
            let data = res.DT.users;
            setData(data);
        }
    }
    return (
        <div>
            <User data={data} />
        </div>
    )
}

export default Homework26;