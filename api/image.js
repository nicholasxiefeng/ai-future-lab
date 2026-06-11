export default async function handler(req, res) {

  res.status(200).json({
    success: true,
    message: "图片接口已连接"
  });

}
