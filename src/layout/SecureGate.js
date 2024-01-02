
export default function SecureGate({children}) {
  let user = JSON.parse(localStorage.getItem("USER_INFOR"))

  if (!user || user.maLoaiNguoiDung != "QuanTri") {
    window.location.href = ".login"
  }
  return children
}
