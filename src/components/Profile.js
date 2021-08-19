import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
// import { Card,Col,Container,Row } from 'react-bootstrap';
import './Profile.css';



class Profile extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <section className="cardProfile">
                    {isAuthenticated &&
                        <React.Fragment>
                            <div className="cover-page">
                            <div class="row py-5 px-4">
    <div class="col-md-5 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover-page">
                <div class="media align-items-end profile-head">
                    <div class="profile mr-3"><img  src={user.picture} alt="..." width="130" class="rounded mb-2 img-thumbnail"/></div>
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0">{user.name}</h4>
                        <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2">{user.email}</i></p>
                    </div>
                </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">215</h5><small class="text-muted">Photos</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">745</h5><small class="text-muted">Followers</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">340</h5><small class="text-muted">Following</small>
                    </li>
                </ul>
            </div>
            <div class="px-4 py-3">
                <h5 class="mb-0">About</h5>
                <div class="p-4 rounded shadow-sm bg-light">
                    <p class="font-italic mb-0">Web Developer</p>
                    <p class="font-italic mb-0">Lives in Jordan</p>
                    <p class="font-italic mb-0">Photographer</p>
                </div>
            </div>
            <div class="py-4 px-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Recent photos</h5><a href="https://unsplash.com/" class="btn btn-link text-muted">Show all</a>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/></div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</React.Fragment>
                    }
            </section>
        );
    }
}

export default withAuth0(Profile);

