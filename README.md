# Workout Hub App

Wellhub style app.

## FRs (Functional Requirements)

- [ ] It should be possible to register
- [ ] It should be possible to authenticate
- [ ] It should be possible to get the profile of a logged-in user
- [ ] It should be possible to get the number of check-ins performed by the logged-in user
- [ ] It should be possible for the user to get their check-in history
- [ ] It should be possible for the user to search for nearby gyms
- [ ] It should be possible for the user to search for gyms by name
- [ ] It should be possible for the user to check-in at a gym
- [ ] It should be possible to validate a user's check-in
- [ ] It should be possible to register a gym

## BRs (Business Rules)

- [ ] The user should not be able to register with an existing email
- [ ] The user cannot make 2 check-ins on the same day
- [ ] The user cannot check-in if they are not within X meters of the gym
- [ ] The check-in can only be validated up to X minutes after being created
- [ ] The check-in can only be validated by administrators
- [ ] Gym can only be registered by administrators

## NFRs (Non-Functional Requirements)

- [ ] The user's password must be encrypted
- [ ] The app's data needs to persist in a database
- [ ] All data lists need to be paginated with X items per page
- [ ] The user must be identified by a JWT
