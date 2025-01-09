import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from '../models/user.models.js'
const registerUser = asyncHandler(async (req, res) => {
  // Accept Data from the user
  const { fullname, email, username, password } = req.body;

  // validation
  if (
    [fullname, usernamem, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All Fields are required");
  }


 const existedUser=  await User.findone({
        $or: [{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409, "User with email or username already exists");

    }
});

export { registerUser };
