import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Guide.css';
import instructions from './instructions';

class Guide extends Component {
    
    render() {
        const { id, step } = this.props.match.params;
        const data = instructions[id]
        let width = "initial";
        if (data.instructions[step].hasOwnProperty("width")) {
            width = data.instructions[step].width
        }
        // import image from '/guides/' + id + '/' + step + '.png';
        return (
            <div className="guideContainer">
                <div className="header">
                    <Link to='/'>
                        <img className="icon" src={`${process.env.PUBLIC_URL}/icons/back.png`} />
                    </Link>
                    <p className="title">{data.title}</p>
                </div>
                <div className="main">
                    <div className="card">
                        <div className="subtitle">
                            {data.instructions[step].subtitle}
                        </div>
                        <div className="title">
                            {data.instructions[step].title}
                        </div>
                        <div className="image">
                            <img className="image" style={{width }} src={`${process.env.PUBLIC_URL}/guides/${id}/${step}.png`} />
                        </div>
                    </div>
                </div>
                <div className="actions">
                {parseInt(step) !== 0 &&
                    <Link to={`/guide/${id}/${parseInt(step) - 1}`} className="action">
                        <p>קודם</p>
                    </Link>
                }
                {parseInt(step) !== (data.instructions.length-1) &&
                    <div className="separator" />
                }
                
                {parseInt(step) === (data.instructions.length-1) ?
                    <Link to='/' className="action main">
                        <p>סיים</p>
                    </Link>
                    :
                    <Link to={`/guide/${id}/${parseInt(step) + 1}`} className="action main">
                        <p>הבא</p>
                    </Link>
                }
                </div>
            </div>
        );
    }
}

export default Guide;