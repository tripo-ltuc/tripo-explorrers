<div class="container-xl">
                <div class="row">
                    <div class="col-md-10 mx-auto">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row">
                                        {this.props.tursData.map((item, idx) => {
                                            return (<>




                                                <div class="col-sm-4">
                                                    <div class="thumb-wrapper">
                                                        <div class="img-box">
                                                            <img src="https://www.princeton.edu/sites/default/files/styles/scale_1440/public/images/2018/01/clouds-19.jpg?itok=ipMqaoRU" class="img-fluid" alt=""></img>
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h4>London</h4>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                                                            <Button onClick={() => { this.tureModalFun(idx) }}>More...</Button>
                                                        </div>
                                                    </div>
                                                </div>




                                            </>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>