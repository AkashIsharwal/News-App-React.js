import React from "react";
import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import LoadingBar from 'react-top-loading-bar'
// import axios from "axios";
const News =(props)=> {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [articles, setArtice] = useState([])
  const [totalResults, settotalResults]= useState([])
  const [click, setclick] = useState(0)
  const countClick= ()=>{
    setclick(click + 1);
    props.setX(click)
  }
  console.log("how many clicks", click);

 
  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  

  const  updatenews = async(page)=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bd803a7b4a4e4ace8c85285a6acb36d3&page=${page}
    &pageSize=${props.pagesize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();
    props.setProgress(90);
    setArtice(parsedData.articles)
    settotalResults(parsedData.totalResults)

    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    console.log(page,"gage nu");
    document.title= `${capitalizeFirstLetter(props.category)}-News Stories`
    updatenews(page);
  }, [page])

 
  
  const next = () => {
     
      const increNumb = page +1;
      updatenews(increNumb);
      setPage(page+1);
      console.log(increNumb, 'next');
    } ;
    
    
    const previous = () => {
      
     const decrNumb = page -1;
      
      updatenews(decrNumb).then((res) =>{

        if (page > 1) {
          setPage(page - 1 ) ;
        }

      }).catch((err) =>{
       console.log(err);
      })

      
      console.log(decrNumb, 'previous');
    };
    // eslint-disable-next-line

    

    return (
      <div className="container ">
        <h1 className=" text-center" style={{marginTop: '75px', marginBottom: '20px'}}>Top {capitalizeFirstLetter(props.category)} Headlines of Today </h1>
        {loading && <Spinner/>}

        <div className="row">
          {!loading &&
            articles.map((element) => {
              const description = element.description
              ? element.description.slice(0, 88)
              : "";
              return (
                <div className="col-md-4" key={element.url} onClick={countClick}>
                  <NewsItem

                    title={element.title}
                    description={description + "..."}
                    imageURL={element.urlToImage}
                    source={element.source.name}
                    url={element.url}
                    author={element.author ? element.author : "unknown"}
                    publishedAt={element.publishedAt}
                    />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={previous}
            >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={next}
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pagesize)
            }
            >
            Next&rarr;
          </button>
        </div>
      </div>
    );
    
  };
    

export default News;

News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};
