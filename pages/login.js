import { CognitoUser, AuthenticationDetails, CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'your-user-pool-id',
  ClientId: 'your-client-id'
};

const userPool = new CognitoUserPool(poolData);

export default function LoginPage() {
  const onLogin = (username, password) => {
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password
    });

    const cognitoUser = new CognitoUser({ Username: username, Pool: userPool });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        console.log('access token + ' + result.getAccessToken().getJwtToken());
        // redirect the user to your home page
      },
      onFailure: function(err) {
        console.error(err);
      },
    });
  };

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        onLogin(e.target[0].value, e.target[1].value)
      }}>
        <label>
          Username
          <input name="username" type="text" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}