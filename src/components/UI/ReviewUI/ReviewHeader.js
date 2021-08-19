import { Component } from "react";


class ReviewHeader extends Component{
    render(){
        return(
            <>
    <header>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://www.letstefl.com/wp-content/uploads/2018/09/map-backgrounds.jpg')",
            height: 500,
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <br />
                <h1 className="mb-3" style={{fontSize:'60px' }}>Reviews and Comments</h1>
                {/* <h4 className="mb-3">Subheading</h4> */}
                <a
                  onClick={this.props.showModal}
                  className="btn btn-warning btn-lg btn-review"
                  href="#!"
                  role="button"
                  style={{fontSize:'30px' }}
                >
                  Add Your Review!
                </a>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </header>
            </>
        );
    }
}


export default ReviewHeader;