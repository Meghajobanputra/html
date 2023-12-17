import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
var output = <div>
  <table cellPadding={5} border={1}>
  <tr >
    <th >Rank</th>
    <th>Team</th>
    <th>Matches Played</th>
    <th>Won</th>
    <th>Lost</th>
    <th>Net Run Rate</th>
    <th>Points</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Gujarat Titans</td>
    <td>14</td>
    <td>10</td>
    <td>4</td>
    <td>0.316</td>
    <td>20</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Rajasthan Royals</td>
    <td>14</td>
    <td>9</td>
    <td>5</td>
    <td>0.298</td>
    <td>18</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Lucknow Super Giants</td>
    <td>14</td>
    <td>9</td>
    <td>5</td>
    <td>0.251</td>
    <td>18</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Royal Challengers Bangalore</td>
    <td>14</td>
    <td>8</td>
    <td>6</td>
    <td>-0.253</td>
    <td>16</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Delhi Capitals</td>
    <td>14</td>
    <td>7</td>
    <td>7</td>
    <td>0.204</td>
    <td>14</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Punjab Kings</td>
    <td>14</td>
    <td>7</td>
    <td>7</td>
    <td>0.126</td>
    <td>14</td>
  </tr>
  <tr>
    <td>7</td>
    <td>Kolkata Knight Riders</td>
    <td>14</td>
    <td>6</td>
    <td>8</td>
    <td>0.146</td>
    <td>12</td>
  </tr>
  <tr>
    <td>8</td>
    <td>Sunrisers Hyderabad</td>
    <td>14</td>
    <td>6</td>
    <td>8</td>
    <td>-0.379</td>
    <td>12</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Chennai Super Kings</td>
    <td>14</td>
    <td>4</td>
    <td>10</td>
    <td>-0.203</td>
    <td>8</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Mumbai Indians</td>
    <td>14</td>
    <td>4</td>
    <td>10</td>
    <td>-0.506</td>
    <td>8</td>
  </tr>
</table>

</div>
root.render(output);