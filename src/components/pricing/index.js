import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[2499,3999,5999],
        positions:['Day 1','Day 1 & 2','Day 1, 2 & 3'],
        desc:[
            'GA Day 1 tickets are general access tickets for 29th December at Sunburn Festival 2018.',
            'GA Day 1 and 2 tickets are general access tickets for 29th and 30th December 2018 at Sunburn Festival.',
            'GA Day 1 and 2 tickets are general access tickets for 29th and 30th December 2018 at Sunburn Festival.'
        ],
        linkto:['https://in.bookmyshow.com/events/sunburn-festival-2018/ET00079774'],
        delay:[500,0,500]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>₹ {this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;