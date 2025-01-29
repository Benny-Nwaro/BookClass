import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation'; // Use useRouter instead of useNavigate
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // Eye icon import

const BookingFormContent = () => {
  const studentSignUpUrl = "https://Testbackend.educify.org/api/api/v1/students/students/signup";
  const studentVerifyOtpUrl = "https://Testbackend.educify.org/api/api/v1/students/verfiy-otp";
  const studentSendOtpUrl = "https://Testbackend.educify.org/api/api/v1/students/send-otp";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [childGrade, setChildGrade] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeButton, setActiveButton] = useState('parent');
  const [showPassword, setShowPassword] = useState(false); // To handle password visibility toggle
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For Confirm password visibility toggle
  const [howDidYouHear, setHowDidYouHear] = useState('');
  const router = useRouter();

  const SignUp = async () => {
    const data = {
      name,
      email,
      subject,
      phoneNumber,
      otp,
      password,
    };

    try {
      const response = await axios.post(studentSignUpUrl, data);
      console.log("Sign up successful", response.data);
      router.push('/bookclass');
    } catch (error: any) {
      console.error("Error during sign-up:", error.response ? error.response.data : error.message);
    }
  };

  const VerifyOtp = async () => {
    const data = { phoneNumber, otp };

    try {
      const response = await axios.post(studentVerifyOtpUrl, data);
      console.log("OTP verified:", response.data);
    } catch (error: any) {
      console.error("Error during OTP verification:", error.response ? error.response.data : error.message);
    }
  };

  const SendOtp = async () => {
    const data = { phoneNumber };

    try {
      const response = await axios.post(studentSendOtpUrl, data);
      console.log("OTP sent successfully:", response.data);
    } catch (error: any) {
      console.error("Error during sending OTP:", error.response ? error.response.data : error.message);
    }
  };

  const handleSendOtp = () => {
    SendOtp();
  };

  const handleSubmit = () => {
    if (password === confirmPassword) {
      SignUp();
      router.push('/bookclass');
    } else {
      console.error("Passwords don't match.");
    }
  };

  return (
    <Box>
      {/* Buttons Section */}
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <StyledSelectionButton
          onClick={() => setActiveButton('parent')}
          active={activeButton === 'parent'}
          sx={{ position: 'relative', zIndex: activeButton === 'parent' ? 2 : 1 }}
        >
          Parent
        </StyledSelectionButton>
        <StyledSelectionButton
          onClick={() => setActiveButton('student')}
          active={activeButton === 'student'}
          sx={{ position: 'relative', zIndex: activeButton === 'student' ? 2 : 1, left: '-20px' }}
        >
          Student
        </StyledSelectionButton>
      </Box>

      <TextField
        autoFocus
        margin='dense'
        label='Parents Name*'
        type='text'
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        size='small'
        sx={{ mb: 1 }}
      />
      <TextField
        margin='dense'
        label='Parents Email Address*'
        type='email'
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        size='small'
        sx={{ mt: 1 }} 
      />    
     
      <TextField
        margin='dense'
        label='Parents Mobile Number*'
        type='text'
        fullWidth
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        InputProps={{
          endAdornment: (
             <Box sx={{ width: '32%', display: 'flex', justifyContent: 'flex-end', paddingTop: 1, paddingBottom: 1 }}>
              <Button
                sx={{ bgcolor: '#3198F5', color: 'white' }}
                fullWidth
                onClick={handleSendOtp}
              >
                Send OTP
              </Button>
            </Box>
          ),
        }}
        size='small'
      />
      <TextField
        margin='dense'
        label='OTP from SMS*'
        type='text'
        fullWidth
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        size='small'
        InputProps={{
          endAdornment: (
            <Box sx={{ width: '32%', display: 'flex', justifyContent: 'flex-end', paddingTop: 1, paddingBottom: 1 }}>
              <Button
                sx={{ bgcolor: '#3198F5', color: 'white' }}
                fullWidth
                onClick={VerifyOtp}
              >
                Verify
              </Button>
            </Box>
          ),
        }}
      />

         <FormControl fullWidth margin="dense" size="small">
          <InputLabel>Child Grade/Class in School*</InputLabel>
          <Select value={childGrade} onChange={(e) => setChildGrade(e.target.value)}>
            <MenuItem value="Grade 1">Grade 1</MenuItem>
            <MenuItem value="Grade 2">Grade 2</MenuItem>
          </Select>
        </FormControl>

      
      <Stack
        gap={0}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent='space-between'
        sx={{ mt: 1 }}
      >
        {/* Password Fields with Eye Icon */}
        <TextField
          margin='dense'
          label='Create Password*'
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size='small'
          InputProps={{
            endAdornment: (
              <Box className='flex justify-end'>
                <Button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </Button>
              </Box>
            ),
          }}
        />
        <TextField
          margin="dense"
          label="Confirm Password*"
          type={showConfirmPassword ? 'text' : 'password'}
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          size="small"
          InputProps={{
            endAdornment: (
              <Box className='flex justify-end'>
                <Button onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </Button>
              </Box>
            ),
          }}
        />
      </Stack>

      {/* New TextField for "How do you hear about us?" */}
      <FormControl fullWidth margin="dense" size="small">
        <InputLabel>How did you hear about us?*</InputLabel>
        <Select value={howDidYouHear} onChange={(e) => setHowDidYouHear(e.target.value)}>
          <MenuItem value='Google'>Google</MenuItem>
          <MenuItem value='LinkedIn'>LinkedIn</MenuItem>
          <MenuItem value='Friend'>Friend</MenuItem>
          <MenuItem value='Facebook'>Facebook</MenuItem>
        </Select>
      </FormControl>

      {/* Centralizing the button using flex layout */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <StyledButton
          sx={{ maxWidth: 300 }}
          onClick={handleSubmit}
        >
          Schedule a Free Class
        </StyledButton>
      </Box>
      <Typography
        mt={2}
        fontWeight={400}
        fontSize={14}
        color='#414158'
        sx={{ textAlign: 'center' }}
      >
        Hammer ocean next were supervisor seat first-order hurting version
        teeth. Squad hard dive will reality <span style={{ color: '#3198F5' }}>terms and conditions</span> effects
        expectations skulls. Impact.
      </Typography>
    </Box>
  );
};

// Styled button for Parent and Student selection
const StyledSelectionButton = styled(Button)<{ active: boolean }>(({ active }) => ({
  backgroundColor: active ? '#000' : 'white',
  color: active ? '#fff' : '#000',
  borderRadius: '20px',
  padding: '10px 24px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '500',
  border: active ? 'none' : '1px solid #000',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  transition: 'all 0.3s ease',
  width: '200px', // Adjusted width for selection buttons
  '&:hover': {
    backgroundColor: active ? '#000' : '#f0f0f0',
    color: active ? '#fff' : '#000',
  },
  '&:not(:last-child)': {
    marginRight: '-10px',
  },
}));

// StyledButton for the 'Schedule a Free Class' button
const StyledButton = styled(Button)({
  backgroundColor: '#3198F5',
  color: 'white',
  borderRadius: '20px',
  padding: '10px 24px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: '500',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  transition: 'all 0.3s ease',

  '&:hover': {
    backgroundColor: '#3198F5',
  },
});

export default BookingFormContent;
