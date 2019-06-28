import Avatar from './avatar';
import Banner from './banner';
import Divider from './divider';
import Subheader from './subheader';
import ActivityCard from './activity-card';
import ActivityComment from './activity-comment';
import AddComment from './add-comment';
import EmailPreview from './email-preview';
import { PrimaryButton } from './button';
import { TextField } from './text-field';
import { MoneyField } from './money-field';
import PasswordField from './password-field';
import GuestPasswordField from './guest-password-field';

import ActivityThumbnail, {
  PURCHASE_UPDATED,
  PURCHASE_CLAIMED,
  MEMBER_INVITED,
  MEMBER_JOINED,
  MEMBER_WITHDREW,
  PURCHASE_TIPPED,
  PURCHASE_UNTIPPED,
  PAYMENT_AUTHORIZED,
  PAYMENT_AUTHORIZED_DEPOSIT,
  PAYMENT_AUTHORIZED_REGULAR,
  PAYMENT_AUTHORIZED_LAST,
  PAYMENT_CAPTURED,
  PURCHASE_COMPLETED,
  PURCHASE_COMMENT_CREATED,
} from './activity-thumbnail';

const desktop = {
  Avatar,
  Banner,
  Divider,
  Subheader,
  ActivityCard,
  ActivityComment,
  ActivityThumbnail,
  PURCHASE_UPDATED,
  PURCHASE_CLAIMED,
  MEMBER_INVITED,
  MEMBER_JOINED,
  MEMBER_WITHDREW,
  PURCHASE_TIPPED,
  PURCHASE_UNTIPPED,
  PAYMENT_AUTHORIZED,
  PAYMENT_AUTHORIZED_DEPOSIT,
  PAYMENT_AUTHORIZED_REGULAR,
  PAYMENT_AUTHORIZED_LAST,
  PAYMENT_CAPTURED,
  PURCHASE_COMPLETED,
  PURCHASE_COMMENT_CREATED,
  AddComment,
  EmailPreview,
  PrimaryButton,
  TextField,
  MoneyField,
  PasswordField,
  GuestPasswordField,
};

export default desktop;
