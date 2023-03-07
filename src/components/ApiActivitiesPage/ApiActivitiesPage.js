import React from 'react'
import './ApiActivitiesPage.css';

const ApiActivitiesPage = () => {
  return (
    <div className="activities-container">
        <div className="activities-all-wrapper">
            <div className="content-wrapper">
                <form className="activity-form" id="form">
                    <h1 className="activity-form-title">Bored?</h1>
                    <h2 className="activity-form-description">Let us help you!</h2>
                    <div className="type-wrapper">
                        <label className="activity-title" htmlFor="activity-type">Activity type:</label>
                        <select className="activity-input" name="activity-type" id="activity-type">
                        </select>
                    </div>
                    
                    <div className="type-wrapper">
                        <label className="activity-title" htmlFor="price-range">Price range (min, max):</label>
                        <input className="activity-input" type="number" name="price-range" id="price-range-left" min="0" max="10" value="1"/>
                        <input className="activity-input" type="number" id="price-range-right" min="0" max="10" value="10"/>
                    </div>
                    <div className="type-wrapper">
                        <label className="activity-title" htmlFor="participants">Number of Participants:</label>
                        <select className="activity-input" name="participants" id="participants"></select>
                    </div>
                    <div className="type-wrapper">
                        <label className="activity-title" htmlFor="accessibility">Accessibility range (min, max):</label>
                        <input className="activity-input" type="number" name="price-range" id="accessibility-range-left" min="0" max="10" value="1"/>
                        <input className="activity-input" type="number" id="accessibility-range-right" min="0" max="10" value="10"/>
                    </div>
                    <div className="button-wrapper">
                        <input className="activity-button customized" type="submit" value="Customized activity" id="selected-input"/>
                        <input className="activity-button random" type="submit" value="Random activity" id="input"/>
                    </div>
                </form>
            </div> 
        </div>
    </div>
  )
}

export default ApiActivitiesPage