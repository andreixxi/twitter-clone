import React from "react";
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterVideoEmbed,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
    return (
        <div class="widgets container">
            <div className="widgets__input ">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search dawnTter" type="text" class="text-light" />
            </div>
            <div className="widgets__widgetContainer">
                <h2 class="text-light">Other tweets</h2>

                <TwitterTweetEmbed tweetId={'1252093815332184071'} />

                <TwitterVideoEmbed
                    id={'560070183650213889'}
                    options={{
                        height: 40,
                        width: 10
                    }}
                />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{
                        height: 150,
                    }}
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