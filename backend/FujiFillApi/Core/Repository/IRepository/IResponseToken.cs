namespace FujiFillApi.Core.Repository.IRepository
{
    public interface IResponseToken
    {
        Task<string> ValidaAcceso();
    }
}
