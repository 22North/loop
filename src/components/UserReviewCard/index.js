import React from 'react'
import './style.css'

class UserReviewCard extends React.Component {

    render() {
        return (
            <div className="user-review-card">
                <div className="user-review-card__heading">
                    {'Awais\'s objectives.'}
                </div>   
                <div className="user-review-card__sub-heading">
                    End of year review.
                </div>   
                <div className="user-review-card__summary">
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <th className="user-review-card__count-heading" scope="row">Drafts.</th>
                                <td className="user-review-card__count user-review-card__count--drafts">3</td>
                            </tr>
                            <tr>
                                <th className="user-review-card__count-heading" scope="row">In progress.</th>
                                <td className="user-review-card__count user-review-card__count--inProgress">7</td>
                            </tr>
                            <tr>
                                <th className="user-review-card__count-heading" scope="row">Completed.</th>
                                <td className="user-review-card__count user-review-card__count--completed">8</td>
                            </tr>
                             <tr>
                                <th className="user-review-card__count-heading" scope="row">Due next month.</th>
                                <td className="user-review-card__count user-review-card__count--due">2</td>
                            </tr>
                             <tr>
                                <th className="user-review-card__count-heading" scope="row">Overdue.</th>
                                <td className="user-review-card__count user-review-card__count--overdue">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserReviewCard