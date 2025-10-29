export interface Role {
  id: string
  name: string
  description: string
  type: 'admin' | 'platform' | 'base'
  permissions: string[]
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface UserRole {
  userId: string
  roleId: string
  assignedAt: string
  assignedBy: string
  expiresAt?: string
}

export interface Permission {
  id: string
  name: string
  description: string
  category: string
}

export const BASE_ROLES: Role[] = [
  {
    id: 'guest',
    name: 'Guest',
    description: 'Unregistered users with limited access',
    type: 'base',
    permissions: ['view_public_content'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'registered',
    name: 'Registered User',
    description: 'Basic account holders',
    type: 'base',
    permissions: ['view_public_content', 'create_profile', 'basic_messaging'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'verified',
    name: 'Verified User',
    description: 'Email/identity verified users',
    type: 'base',
    permissions: ['view_public_content', 'create_profile', 'basic_messaging', 'verified_features'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

export const PLATFORM_ROLES: Role[] = [
  {
    id: 'social_user',
    name: 'Social User',
    description: 'Access to social platform features',
    type: 'platform',
    permissions: ['social_post', 'social_comment', 'social_like', 'social_share'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'fantasy_player',
    name: 'Fantasy Player',
    description: 'Fantasy sports participant',
    type: 'platform',
    permissions: ['fantasy_join', 'fantasy_create_team', 'fantasy_trade'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'content_creator',
    name: 'Content Creator',
    description: 'CMS dashboard access',
    type: 'platform',
    permissions: ['cms_create', 'cms_edit', 'cms_publish'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'seller',
    name: 'Seller',
    description: 'Seller dashboard and marketplace access',
    type: 'platform',
    permissions: ['seller_dashboard', 'marketplace_sell', 'product_manage'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'project_manager',
    name: 'Project Manager',
    description: 'Project management system access',
    type: 'platform',
    permissions: ['project_create', 'project_manage', 'team_assign'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'marketplace_buyer',
    name: 'Marketplace Buyer',
    description: 'Marketplace purchasing rights',
    type: 'platform',
    permissions: ['marketplace_buy', 'marketplace_review'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

export const ADMIN_ROLES: Role[] = [
  {
    id: 'super_admin',
    name: 'Super Admin',
    description: 'Full system access',
    type: 'admin',
    permissions: ['*'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'system_admin',
    name: 'System Admin',
    description: 'Technical operations and system management',
    type: 'admin',
    permissions: ['system_health', 'aws_manage', 's3_manage', 'api_manage', 'integrations_manage'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'finance_admin',
    name: 'Finance Admin',
    description: 'Financial operations and compliance',
    type: 'admin',
    permissions: ['billing_manage', 'payments_manage', 'escrow_manage', 'compliance_manage'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'content_manager',
    name: 'Content Manager',
    description: 'Content creation and management',
    type: 'admin',
    permissions: ['cms_admin', 'blog_admin', 'forms_manage', 'preview_manage'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'community_moderator',
    name: 'Community Moderator',
    description: 'User safety and content moderation',
    type: 'admin',
    permissions: ['social_moderate', 'messaging_moderate', 'users_moderate', 'audit_view'],
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]