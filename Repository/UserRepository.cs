using Dapper;
using Dyaneshwar_Wadekar_Project.Models;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dyaneshwar_Wadekar_Project.Controllers
{
    public class UserRepository : IUserRepository
    {
        private readonly IDbConnection _connection;

        public UserRepository(IDbConnection connection)
        {
            _connection = connection;
        }

        public async Task InsertUserAsync(User user)
        {
            
            await _connection.ExecuteAsync("Sp_InsertUser", new
            {
                user.UserName,
                user.Emailid,
                user.Password,
                user.Birthdate,
                user.Address
            }, commandType: System.Data.CommandType.StoredProcedure);
        }

        public async Task UpdateUserAsync(User user)
        {
          
            await _connection.ExecuteAsync("Sp_UpdateUser", new
            {
                user.UserId,
                user.UserName,
                user.Emailid,
                user.Password,
                user.Birthdate,
                user.Address
            }, commandType: System.Data.CommandType.StoredProcedure);
        }

        public async Task DeleteUserAsync(int userId)
        {
           
            await _connection.ExecuteAsync("Sp_DeleteUser", new { UserId = userId }, commandType: System.Data.CommandType.StoredProcedure);
        }

        public async Task<IEnumerable<User>> GetUsersAsync()
        {
    
            return await _connection.QueryAsync<User>("Sp_GetUsers", commandType: System.Data.CommandType.StoredProcedure);
        }

        public async Task<User> GetUserByIdAsync(int userId)
        {
           
            return await _connection.QuerySingleOrDefaultAsync<User>("Sp_GetUserById", new { UserId = userId }, commandType: CommandType.StoredProcedure);
        }
    }
}
