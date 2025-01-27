using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using FujiFillApi.Core.Repository.IRepository;

namespace FujiFillApi.Core.Repository
{
    public class ResponseToken : IResponseToken
    {
        public async Task<string> ValidaAcceso()
        {
            try
            {
                string strToken = string.Empty;

                ///Se Genera token de sesión 
                string strLlave = "clave-secreta-api";
                strToken = GenerarToken("Christian", System.Text.Encoding.UTF8.GetBytes(strLlave));//usu.nombre 

                return strToken;
            }
            catch (Exception ex)
            {

                return ex.Message;
            }
        }

        public string GenerarToken(string usuario, byte[] llave)
        {
            SymmetricSecurityKey securityKey = new SymmetricSecurityKey(llave);  //Llave simetrica de seguridad
            SecurityTokenDescriptor descriptor = new SecurityTokenDescriptor  //Metodo de jwt para como construir la llave de seguridad
            {
                Subject = new ClaimsIdentity(new[] {
                    new Claim(ClaimTypes.Name, usuario) }),
                //Expires = DateTime.UtcNow.AddHours(1), 
                Expires = DateTime.UtcNow.AddHours(2),
                NotBefore = DateTime.UtcNow,
                SigningCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature)
            };

            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
            JwtSecurityToken token = handler.CreateJwtSecurityToken(descriptor);
            return handler.WriteToken(token);
        }
    }
}
