const tbody_table = (sp) => {
    return ` <tr>
      <td>${sp.Id}</td>
      <td class='img-item'><img src="/frontend/public/assets${sp.Hinh}" alt="" /></td>
      <td>
        <h4>${sp.Name}</h4>
      </td>
      <td>
        <span class="price">${Number(sp.Price).toLocaleString("Vi")} VNĐ</span>
      </td>
      <td>${sp.Price_Sale}%</td>      
      <td>
      <a href="?page=product&act=updateProductAD&id=${sp.Id}" class="btn btn-update">Sửa</a>
      <a href="?page=product&act=deleteProductAD&id=${sp.Id}" class="btn btn-delete">Xóa</a>
      </td>
    </tr>`;
};
export default tbody_table;
