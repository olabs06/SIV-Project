import { newsData } from "../lib/newsData"
import newsImg from "../assets/images/landing/newsImg.png"
const HomeInfoBar = () => {
    return (
        <section>
            {newsData.map(news => (
                <section className="w-[213px] h-[288px] px-4 rounded-[12px] flex flex-col items-center py-2 bg-blue-background mb-12 text-blue-dark shadow-lg" key={Math.random() * 1000}>
                    <h3 className="leading-8 font-semibold text-md capitalize self-center my-3 ">{news.newsHeadline}</h3>
                    <div className="h-[75px] w-[198px] " >
                        <img src={newsImg} alt="icon" className="w-full h-full object-cover rounded-lg " />
                    </div>
                    <h3 className="flex flex-wrap m-auto" style={{
                        overflow: `hidden`,
                        textOverflow: `ellipsis`
                    }}>{news.newsContent}</h3>
                    <div className="flex justify-center items-center p-2 m-auto w-full h-12 ">
                        <button className=" shadow-lg text-white rounded-full bg-gradient-to-r from-blue-light to-blue-dark font-bold leading-8 px-6 py-1 w-full">MORE</button>
                    </div>
                </section>
            ))}
        </section>
    )
}

export default HomeInfoBar