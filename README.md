To Run the project 
1. Run the Solution  
2. open -> \HtmlPage\UserRegistration.html Page in your browser
3. Change the connection string accordingly


#Use This SQL Script for Database 

USE [DyaneshwarTask]
GO
/****** Object:  StoredProcedure [dbo].[Sp_DeleteUser]    Script Date: 8/31/2024 9:12:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Sp_DeleteUser]
    @UserId INT
AS
BEGIN
    DELETE FROM tblUser
    WHERE UserId = @UserId;
END
GO
/****** Object:  StoredProcedure [dbo].[Sp_GetUserById]    Script Date: 8/31/2024 9:12:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Sp_GetUserById]
    @UserId INT
AS
BEGIN
   select * from tblUser where UserId=@UserId
END
GO
/****** Object:  StoredProcedure [dbo].[Sp_GetUsers]    Script Date: 8/31/2024 9:12:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Sp_GetUsers]
AS
BEGIN
    SELECT UserId, UserName, Emailid, Birthdate, Address
    FROM tblUser;
END
GO
/****** Object:  StoredProcedure [dbo].[Sp_InsertUser]    Script Date: 8/31/2024 9:12:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[Sp_InsertUser]
    @UserName NVARCHAR(50),
    @Emailid NVARCHAR(100),
    @Password NVARCHAR(255),
    @Birthdate DATE,
    @Address NVARCHAR(255)
AS
BEGIN
    INSERT INTO tblUser (UserName, Emailid, Password, Birthdate, Address)
    VALUES (@UserName, @Emailid, @Password, @Birthdate, @Address);
END
GO
/****** Object:  StoredProcedure [dbo].[Sp_UpdateUser]    Script Date: 8/31/2024 9:12:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[Sp_UpdateUser]
    @UserId INT,
    @Birthdate DATE,
    @Address NVARCHAR(255),
	@UserName NVARCHAR(255),
	@Emailid  NVARCHAR(255),
	@Password NVARCHAR(255)
AS
BEGIN
    UPDATE tblUser
    SET Birthdate = @Birthdate,
        Address = @Address,
		UserName = @UserName,
		Emailid = @Emailid,
		Password = @Password
    WHERE UserId = @UserId;
END
GO
/****** Object:  Table [dbo].[tblUser]    Script Date: 8/31/2024 9:12:06 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblUser](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[Emailid] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](255) NOT NULL,
	[Birthdate] [date] NULL,
	[Address] [nvarchar](255) NULL,
	[CreatedDate] [datetime] NULL DEFAULT (getdate()),
PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[tblUser] ON 

GO
INSERT [dbo].[tblUser] ([UserId], [UserName], [Emailid], [Password], [Birthdate], [Address], [CreatedDate]) VALUES (11, N'Wadekar', N'gayake@gmail.com', N'$2a$11$P6diHBi2aNlpc0kg6coyO.rCCCFcuzS7Y28zTp26OHedrtHK/tveu', CAST(N'2024-08-31' AS Date), N'Chh. Sambhajinagarr', CAST(N'2024-08-31 19:12:57.990' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[tblUser] OFF
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ__tblUser__7EDA1EE6F9C94D67]    Script Date: 8/31/2024 9:12:06 PM ******/
ALTER TABLE [dbo].[tblUser] ADD UNIQUE NONCLUSTERED 
(
	[Emailid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ__tblUser__C9F284565EC05EF2]    Script Date: 8/31/2024 9:12:06 PM ******/
ALTER TABLE [dbo].[tblUser] ADD UNIQUE NONCLUSTERED 
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
