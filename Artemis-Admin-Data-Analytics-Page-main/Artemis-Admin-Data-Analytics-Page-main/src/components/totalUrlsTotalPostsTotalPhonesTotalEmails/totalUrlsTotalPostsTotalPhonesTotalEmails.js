import React from 'react';
import './totalUrlsTotalPostsTotalPhonesTotalEmails.css';

export class ActiveUsersTotalLogins extends React.Component 
{
  render() 
  {
    let totalUrls = 52870455;
    let totalPosts = 372341;
    let totalPhones = 56237;
    let totalEmails = 913429;
    return (
        <div>
          <h2 class="totalUrlsCount">{totalUrls}</h2>
          <h3 class="totalUrls">Total Url's</h3>
          <h2 class="totalPosts">{totalPosts}</h2>
          <h3 class="totalPostsCount">Total Post's</h3>
          <h2 class="totalPhonesCount">{totalPhones}</h2>
          <h3 class="totalPhones">Total Phone's</h3>
          <h2 class="totalEmailsCount">{totalEmails}</h2>
          <h3 class="totalEmails">Total Email's</h3>
        </div>
    );
  }
}

export default ActiveUsersTotalLogins;