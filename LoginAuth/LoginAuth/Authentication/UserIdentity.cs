using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace LoginAuth.Authentication
{
    public static class UserIdentity
    {
 
        public static Task<ClaimsIdentity> GetIdentity(string username, string password)
        {
           
            // Don't do this in production, obviously!
            if (username == "TEST" && password == "TEST123")
            {
                return Task.FromResult(new ClaimsIdentity(new GenericIdentity(username, "Token"), new Claim[] { }));
            }

            // Credentials are invalid, or account doesn't exist
            return Task.FromResult<ClaimsIdentity>(new ClaimsIdentity(new GenericIdentity(username, "Token"), new Claim[] { }));
        }
         
    }
}
