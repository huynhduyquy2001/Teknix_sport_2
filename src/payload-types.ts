/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    'time-slots': TimeSlot;
    courts: Court;
    bookings: Booking;
    payments: Payment;
    partners: Partner;
    media: Media;
    'partner-specs': PartnerSpec;
    products: Product;
    reviews: Review;
    'discount-rules': DiscountRule;
    business: Business;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    settings: GeneralSettings;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  phoneNumber?: string | null;
  avatar?: string | Media | null;
  dateOfBirth?: string | null;
  gender?: ('male' | 'female' | 'other') | null;
  province_id?:
  | (
    | '217'
    | '206'
    | '248'
    | '245'
    | '253'
    | '249'
    | '213'
    | '262'
    | '205'
    | '239'
    | '258'
    | '252'
    | '220'
    | '246'
    | '203'
    | '210'
    | '241'
    | '265'
    | '204'
    | '216'
    | '207'
    | '227'
    | '232'
    | '201'
    | '236'
    | '225'
    | '224'
    | '250'
    | '202'
    | '267'
    | '268'
    | '208'
    | '219'
    | '259'
    | '264'
    | '209'
    | '247'
    | '269'
    | '211'
    | '231'
    | '235'
    | '233'
    | '261'
    | '229'
    | '260'
    | '237'
    | '243'
    | '242'
    | '230'
    | '238'
    | '218'
    | '266'
    | '240'
    | '226'
    | '244'
    | '234'
    | '223'
    | '212'
    | '214'
    | '228'
    | '215'
    | '221'
    | '263'
  )
  | null;
  district_id?: string | null;
  ward_id?: string | null;
  verificationCode?: number | null;
  verificationCodeExpires?: Date | null;
  otpAttempts?: number | null;
  auth2?: boolean | null;
  roles?: ('admin' | 'customer')[] | null;
  accountStatus?: ('active' | 'suspended' | 'deleted') | null;
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean | null;
  apiKey?: string | null;
  apiKeyIndex?: string | null;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  caption?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "time-slots".
 */
export interface TimeSlot {
  id: string;
  type: 'normal' | 'vip' | 'student';
  hourlyRate?:
  | {
    from?: number | null;
    to?: number | null;
    price?: number | null;
    id?: string | null;
  }[]
  | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "courts".
 */
export interface Court {
  id: string;
  name: string;
  description: string;
  image?: string | Media | null;
  available?: boolean | null;
  facilities?: ('badminton' | 'basketball' | 'pickleballl' | 'soccer') | null;
  owner?: (string | null) | Partner;
  hourlyRate?: (string | null) | TimeSlot;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "partners".
 */
export interface Partner {
  id: string;
  name: string;
  owner: string | User;
  status?: ('pending' | 'active' | 'inactive') | null;
  banner?: string | Media | null;
  avatar?: string | Media | null;
  images?:
  | {
    image: string | Media;
    id?: string | null;
  }[]
  | null;
  daysOff?: ('monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday')[] | null;
  description?: string | null;
  amenities?: ('wifi' | 'changing_room' | 'drinking_water' | 'flood_lights' | 'washroom')[] | null;
  locationLongitude?: number | null;
  locationLatitude?: number | null;
  averageRating?: number | null;
  ratingCount?: number | null;
  openingTimeAt?: number | null;
  closingTimeAt?: number | null;
  type: {
    bussinessType: ('renter' | 'seller')[];
    bussinessObject?: (string | Business)[] | null;
  };
  courts: {
    court?: (string | Court)[] | null;
  };
  products: {
    products?: (string | Product)[] | null;
  };
  offers: {
    offers?:
    | {
      name: string;
      description?: string | null;
      offerType: 'percentage' | 'fixed' | 'fixedPerProduct' | 'freeship';
      offerValue: number;
      maximumAmount?: number | null;
      enable: boolean;
      startDate?: string | null;
      endDate?: string | null;
      id?: string | null;
    }[]
    | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "business".
 */
export interface Business {
  id: string;
  name: string;
  description?: string | null;
  logo?: string | Media | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  name: string;
  image?: string | Media | null;
  description: string;
  price: number;
  isSync?: boolean | null;
  inventory: number;
  owner?: (string | null) | Partner;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "bookings".
 */
export interface Booking {
  id: string;
  court: string | Court;
  user: string | User;
  bookingDate: string;
  bookingTime: {
    startTime: number;
    endTime: number;
  };
  bookingStatus?: ('pending' | 'confirmed' | 'cancelled') | null;
  paymentStatus?: ('unpaid' | 'paid' | 'refunded') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payments".
 */
export interface Payment {
  id: string;
  booking: string | Booking;
  amount: number;
  paymentMethod: 'credit-card' | 'paypal' | 'bank-transfer';
  status?: ('pending' | 'successful' | 'failed') | null;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "partner-specs".
 */
export interface PartnerSpec {
  id: string;
  followingCount?: number | null;
  followerCount?: number | null;
  ratingStar?: number | null;
  responseRate?: number | null;
  responseTime?: number | null;
  owner?: (string | null) | Partner;
  isMerchantVerified?: boolean | null;
  itemCount?: number | null;
  lastActiveTime?: number | null;
  chatDisabled?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews".
 */
export interface Review {
  id: string;
  partner: string | Partner;
  reviewer: string | User;
  rating: number;
  comment: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "discount-rules".
 */
export interface DiscountRule {
  id: string;
  discountType: {
    name: string;
    description?: string | null;
    discountType: 'percentage' | 'fixed' | 'fixedPerProduct' | 'freeship';
    discountValue: number;
    maximumAmount?: number | null;
    enable: boolean;
    startDate?: string | null;
    endDate?: string | null;
  };
  conditions?:
  | {
    conditionType: 'cart_total' | 'cart_item_quantity' | 'products' | 'date' | 'dates_of_week';
    operator_cart?: ('greater_than' | 'less_than') | null;
    operator_products?: ('in_list' | 'not_in_list') | null;
    from_day?: string | null;
    to_day?: string | null;
    operator_dates_of_week?: ('in_list' | 'not_in_list') | null;
    value?: string | null;
    productCodes?:
    | {
      code: string;
      id?: string | null;
    }[]
    | null;
    daysOfWeek?: ('monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday')[] | null;
    logicalOperator?: ('and' | 'or') | null;
    id?: string | null;
  }[]
  | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
  | {
    [k: string]: unknown;
  }
  | unknown[]
  | string
  | number
  | boolean
  | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface GeneralSettings {
  id: string;
  novu?: {
    apiKey?: string | null;
  };
  googleMapsApiKey: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config { }
}