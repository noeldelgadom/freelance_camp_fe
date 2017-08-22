"use strict";
class Proposal {
    constructor(id, customer, portfolio_url = "http://", tools, estimated_hours, hourly_rate, weeks_to_complete, client_email) {
        this.id = id;
        this.customer = customer;
        this.portfolio_url = portfolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complete = weeks_to_complete;
        this.client_email = client_email;
    }
}
exports.Proposal = Proposal;
// 15, 'ABC Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devcamp.com'
//# sourceMappingURL=proposal.js.map