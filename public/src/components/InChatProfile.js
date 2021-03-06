import React from 'react';
import '../styles/chat-page.css'
import calculateAge from '../helpers/calculateAge' 
import InChatProfileQuizAnswers from './InChatProfileQuizAnswers'
import InChatProfileImage from './InChatProfileImage'
export default (props) => (
    <div className="in-chat-profile">
    <div>
        <div class="profile_info_name">{props.user.name}</div>
        <InChatProfileImage image={props.user.image} blur={props.user.blur}/>
    </div>
    <div className="profile_info">
        <div className="profile_info_desc">
            <span class="profile_info_desc_location">{props.user.city}</span> 
            <span class="profile_info_desc_gender">{props.user.gender}</span>
            <span class="profile_info_desc_age">{props.user.dob && calculateAge(new Date(props.user.dob))}</span>
        </div>
        <InChatProfileQuizAnswers quiz={props.user.quiz} blur={props.user.blur}/>
    </div>
</div>
)


