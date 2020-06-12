import { twitterFollowersCount } from 'twitter-followers-count';
import { environment} from '../../environments/environment';
export const  getTwitterFollowers = twitterFollowersCount({
    consumer_key: environment.twitter.API_key,
    consumer_secret: environment.twitter.secret_key,
    access_token_key: environment.twitter.Access_token,
    access_token_secret: environment.twitter.Access_token_secret,
  })