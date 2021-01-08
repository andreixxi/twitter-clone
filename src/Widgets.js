import React from "react";
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search dawnTter" type="text" class="text-light" />
            </div>
            <div className="widgets__widgetContainer">
                <h2 class="text-secondary">Other tweets</h2>
                <TwitterTweetEmbed tweetId={'1252093815332184071'} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={'https://twitter-clone-f89ed.web.app/'}
                    options={{ text: 'what a twitter clone i cannot believe me eyes *music*' }}
                />
            </div>
        </div>
    );
}

export default Widgets;