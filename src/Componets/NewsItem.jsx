import React, { Component }  from "react";
import  {useState} from "react";

const NewsItem=(props)=>{
  // const countClick= ()=>{
  //   setclick(click + 1);
  // }
  // const [click, setclick] = useState(0)
  // console.log("how many clicks", click);
{
    let { title, description, imageURL, url, publishedAt, author, source } = props;
    return (
      
      <div>
        <div className="card my-1" style={{}} >
          
          <div>
            <span
              class=" badge rounded-pill bg-danger"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              {source}
              {/* <span class="visually-hidden">unread messages</span> */}
            </span>
          </div>
          <img 
            className="card-img-top" style={{height:'250px'}}
            src={
              imageURL
                ? imageURL
                : "https://depositphotos.com/photos/breaking-news.html"
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text">
              {" "}
              <small className="text-muted">
                By {author} on {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">
              See Full
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
