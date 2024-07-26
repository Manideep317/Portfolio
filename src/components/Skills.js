'use client'
export default function Skills() {
    const skill=[
        {
            skillname:'Nextjs',
            skillimg:'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png',
        },
        {
            skillname:'Reactjs',
            skillimg:'https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg'
        },
        {
            skillname:'Javascript',
            skillimg:'https://upload.wikimedia.org/wikipedia/commons/c/ce/Unofficial_JavaScript_logo.svg'
        },
        {
            skillname:'Node js',
            skillimg:'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp&w=256'
        },
        {
            skillname:'Express js',
            skillimg:'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'
        },
        {
            skillname:'C++',
            skillimg:'https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png',
        },
        {
            skillname:'Python',
            skillimg:'https://www.svgrepo.com/show/376344/python.svg'
        },
        {
            skillname:'Beautiful Soup',
            skillimg:'https://app.matatika.com/assets/images/datasource/tap-beautifulsoup.png',
        },
        {
            skillname:'Pandas',
            skillimg:'https://image.pngaaa.com/296/1947296-middle.png',
        }
    ]
  return (
    <div className="grid grid-cols-4 max-md:grid-cols-3 place-items-center my-[1rem] gap-[16px]">
      {
        skill.map((item,index)=>(
            <div key={index} className="flex w-[5rem] h-[5rem] bg-[#ffffff] hover:scale-105 transiion hover:duration-100 hover:ease-in-out shadow-lg hover:shadow-xl hover:shadow-[#fc6a0350] rounded-lg mx-2 items-center justify-center">
                <img src={item.skillimg} alt="" className="w-20 h-20"/>
            </div>
        ))
      }
    </div>
  )
}
