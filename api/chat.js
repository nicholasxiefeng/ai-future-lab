export default async function handler(req, res) {

  if(req.method !== "POST"){

    return res.status(200).json({
      reply:"API正常运行"
    });

  }

  try{

    const { question } = req.body;

    const response = await fetch(
      "https://open.bigmodel.cn/api/paas/v4/chat/completions",
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json",

          "Authorization":"Bearer sk-f0b0171d1d9446cd98308647f10ff2c3"
        },

        body:JSON.stringify({

          model:"glm-4",

          messages:[
            {
              role:"user",
              content:question
            }
          ]

        })

      }
    );

    const data = await response.json();

    res.status(200).json({
      reply:data.choices[0].message.content
    });

  }catch(err){

    res.status(500).json({
      reply:"AI连接失败"
    });

  }

}
