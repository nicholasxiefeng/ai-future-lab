export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({
      reply: "API正常运行"
    });
  }

  try {
    const { question } = req.body;

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type":"application/json; charset=utf-8"
        "Authorization": "Bearer sk-a5dcf2999bed40ad88424096da7c10f4"
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "user",
            content: String(question)
          }
        ]
      })
    });

    const data = await response.json();

    return res.status(200).json({
      reply: data.choices[0].message.content
    });

  } catch (err) {
    return res.status(500).json({
      reply: "DeepSeek连接失败：" + err.message
    });
  }
}
