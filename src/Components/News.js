import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=> {
   const[articles,setarticles]=useState([])
   const[loading,setLoading]=useState(true)
   const[page,setpage]=useState(1)
   const[totalResults,settotalResults]=useState(0)
  //  document.title=`${props.category.toUpperCase()} --  समाचार`;
  
  // const topclick = () => {
  //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    
  // }

   const updatenews =async  ()=>{
      props.setprogress(15);
      const url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
      setLoading(true)
    let data = await fetch(url);
    props.setprogress(40);

    let parsedData = await data.json();
    console.log(parsedData);
    props.setprogress(72);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)

    props.setprogress(100);  
    }


    useEffect(()=>{
      updatenews();

    },[])

  
  // const handleprevclick = async () => {
  //   setpage(page-1)
  //   updatenews();
  // };
  // const handlenextclick = async () => {
  //   setpage(page+1)
  //    updatenews();
  // };
  
  const fetchMoreData = async() => {
    setpage(page+1)
    let url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&&category=${props.category}&apiKey=a235f3af04ae4c88a5a789e7be673307&page=${page+1}&pagesize=${props.pagesize}`;
    
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  setarticles(articles.concat(parsedData.articles))
  settotalResults(parsedData.totalResults)
  
  };
  return(
     <>
        <h2 className="text-center mx-3" style={{margin:"35px",marginTop:"100px"}}>TOP SAMACHAR HEADLLINES ON  {props.category.toUpperCase()}</h2>
       {loading && <Loading/>} 
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading/>}
        >
          <div className="container">
        <div className="row">
          {
          // !loading &&
           articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title
                    // ?.slice(0,50)
                  }
                  description={element.description
                    // ?.slice(0,99)
                         }
                  newsurl={element.url}
                  imgurl={element.urlToImage}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            )
          })}
        </div>
        </div>
        </InfiniteScroll>
       
      </>
  )
        }
  

News.defaultProps={
  country:"in",
  pagesize:6,
  category:"general"

} 

News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string,
}

export default News;
