const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.slyyfoxxmedia.com'

class ApiClient {
  private baseURL: string
  private token: string | null = null

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  setAuthToken(token: string) {
    this.token = token
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`
    const headers = {
      'Content-Type': 'application/json',
      ...(this.token && { Authorization: `Bearer ${this.token}` }),
      ...options.headers,
    }

    const response = await fetch(url, { ...options, headers })
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }
    
    return response.json()
  }

  // Dashboard APIs
  async getDashboardMetrics() {
    return this.request('/admin/dashboard/metrics')
  }

  async getPaymentActions() {
    return this.request('/admin/dashboard/payment-actions')
  }

  // Analytics APIs
  async getAnalytics(timeRange: string) {
    return this.request(`/admin/analytics?range=${timeRange}`)
  }

  // User Management APIs
  async getUsers(filters: any) {
    return this.request('/admin/users', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async updateUserStatus(userId: string, status: string) {
    return this.request(`/admin/users/${userId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status })
    })
  }

  // Billing APIs
  async getBillingOverview() {
    return this.request('/admin/billing/overview')
  }

  async processRefund(transactionId: string) {
    return this.request(`/admin/billing/refund/${transactionId}`, {
      method: 'POST'
    })
  }

  // Escrow APIs
  async getEscrowFunds() {
    return this.request('/admin/escrow/funds')
  }

  async releaseFunds(transactionId: string) {
    return this.request(`/admin/escrow/release/${transactionId}`, {
      method: 'POST'
    })
  }

  // Products APIs
  async getProducts(filters: any) {
    return this.request('/admin/products', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async approveProduct(productId: string) {
    return this.request(`/admin/products/${productId}/approve`, {
      method: 'POST'
    })
  }

  // Licensing APIs
  async getLicenses(filters: any) {
    return this.request('/admin/licensing', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async revokeLicense(licenseId: string) {
    return this.request(`/admin/licensing/${licenseId}/revoke`, {
      method: 'POST'
    })
  }

  // Compliance APIs
  async getComplianceOverview() {
    return this.request('/admin/compliance/overview')
  }

  async getContentViolations() {
    return this.request('/admin/compliance/content-violations')
  }

  async getLegalRequests() {
    return this.request('/admin/compliance/legal-requests')
  }

  async processContentViolation(violationId: string, action: string) {
    return this.request(`/admin/compliance/violations/${violationId}`, {
      method: 'PUT',
      body: JSON.stringify({ action })
    })
  }

  // Email APIs
  async getEmailOverview() {
    return this.request('/admin/email/overview')
  }

  async getEmailTemplates() {
    return this.request('/admin/email/templates')
  }

  async getEmailActivity(filters: any) {
    return this.request('/admin/email/activity', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async sendTestEmail(templateId: string, recipient: string) {
    return this.request('/admin/email/test', {
      method: 'POST',
      body: JSON.stringify({ templateId, recipient })
    })
  }

  // Project Management Email APIs
  async sendTaskAssignment(taskId: string, assigneeEmail: string) {
    return this.request('/admin/email/project/task-assignment', {
      method: 'POST',
      body: JSON.stringify({ taskId, assigneeEmail })
    })
  }

  async sendProjectUpdate(projectId: string, clientEmails: string[]) {
    return this.request('/admin/email/project/update', {
      method: 'POST',
      body: JSON.stringify({ projectId, clientEmails })
    })
  }

  async sendDeadlineReminder(taskId: string, teamEmails: string[]) {
    return this.request('/admin/email/project/deadline-reminder', {
      method: 'POST',
      body: JSON.stringify({ taskId, teamEmails })
    })
  }

  // Forms APIs
  async getForms() {
    return this.request('/admin/forms')
  }

  async createForm(formData: any) {
    return this.request('/admin/forms', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
  }

  async getFormSubmissions(formId: string) {
    return this.request(`/admin/forms/${formId}/submissions`)
  }

  async updateProjectFromForm(formId: string, submissionId: string) {
    return this.request(`/admin/forms/${formId}/submissions/${submissionId}/sync-project`, {
      method: 'POST'
    })
  }

  // AWS SES APIs
  async getSESStats() {
    return this.request('/admin/ses/stats')
  }

  async getVerifiedDomains() {
    return this.request('/admin/ses/domains')
  }

  async addDomain(domain: string) {
    return this.request('/admin/ses/domains', {
      method: 'POST',
      body: JSON.stringify({ domain })
    })
  }

  async removeDomain(domain: string) {
    return this.request(`/admin/ses/domains/${domain}`, {
      method: 'DELETE'
    })
  }

  async getBounces(timeframe: string) {
    return this.request(`/admin/ses/bounces?timeframe=${timeframe}`)
  }

  async getSuppressionList() {
    return this.request('/admin/ses/suppression')
  }

  async addToSuppression(email: string, reason: string) {
    return this.request('/admin/ses/suppression', {
      method: 'POST',
      body: JSON.stringify({ email, reason })
    })
  }

  async removeFromSuppression(email: string) {
    return this.request(`/admin/ses/suppression/${email}`, {
      method: 'DELETE'
    })
  }

  async updateSESConfig(config: any) {
    return this.request('/admin/ses/config', {
      method: 'PUT',
      body: JSON.stringify(config)
    })
  }

  async generateSMTPCredentials() {
    return this.request('/admin/ses/smtp-credentials', {
      method: 'POST'
    })
  }

  // S3 Storage APIs
  async getS3Overview() {
    return this.request('/admin/s3/overview')
  }

  async getBuckets() {
    return this.request('/admin/s3/buckets')
  }

  async createBucket(name: string, region: string) {
    return this.request('/admin/s3/buckets', {
      method: 'POST',
      body: JSON.stringify({ name, region })
    })
  }

  async deleteBucket(bucketName: string) {
    return this.request(`/admin/s3/buckets/${bucketName}`, {
      method: 'DELETE'
    })
  }

  async getRecentUploads() {
    return this.request('/admin/s3/recent-uploads')
  }

  async getBucketPolicy(bucketName: string) {
    return this.request(`/admin/s3/buckets/${bucketName}/policy`)
  }

  async updateBucketPolicy(bucketName: string, policy: any) {
    return this.request(`/admin/s3/buckets/${bucketName}/policy`, {
      method: 'PUT',
      body: JSON.stringify(policy)
    })
  }

  async getLifecycleRules() {
    return this.request('/admin/s3/lifecycle-rules')
  }

  async createLifecycleRule(rule: any) {
    return this.request('/admin/s3/lifecycle-rules', {
      method: 'POST',
      body: JSON.stringify(rule)
    })
  }

  // CMS Admin APIs
  async getCMSOverview() {
    return this.request('/admin/cms/overview')
  }

  async getPages(filters: any) {
    return this.request('/admin/cms/pages', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async createPage(pageData: any) {
    return this.request('/admin/cms/pages', {
      method: 'POST',
      body: JSON.stringify(pageData)
    })
  }

  async updatePage(pageId: string, pageData: any) {
    return this.request(`/admin/cms/pages/${pageId}`, {
      method: 'PUT',
      body: JSON.stringify(pageData)
    })
  }

  async getTemplates() {
    return this.request('/admin/cms/templates')
  }

  async createTemplate(templateData: any) {
    return this.request('/admin/cms/templates', {
      method: 'POST',
      body: JSON.stringify(templateData)
    })
  }

  async getPendingContent() {
    return this.request('/admin/cms/content-review')
  }

  async approveContent(contentId: string) {
    return this.request(`/admin/cms/content-review/${contentId}/approve`, {
      method: 'POST'
    })
  }

  async getMediaLibrary() {
    return this.request('/admin/cms/media')
  }

  async uploadMedia(mediaData: FormData) {
    return this.request('/admin/cms/media', {
      method: 'POST',
      body: mediaData,
      headers: {} // Remove Content-Type to let browser set it for FormData
    })
  }

  async getSEOAnalytics() {
    return this.request('/admin/cms/seo-analytics')
  }

  // CRM Admin APIs
  async getCRMOverview() {
    return this.request('/admin/crm/overview')
  }

  async getLeads(filters: any) {
    return this.request('/admin/crm/leads', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async createLead(leadData: any) {
    return this.request('/admin/crm/leads', {
      method: 'POST',
      body: JSON.stringify(leadData)
    })
  }

  async updateLeadStatus(leadId: string, status: string) {
    return this.request(`/admin/crm/leads/${leadId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status })
    })
  }

  async getCustomers(filters: any) {
    return this.request('/admin/crm/customers', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async getProjects(filters: any) {
    return this.request('/admin/crm/projects', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async createProject(projectData: any) {
    return this.request('/admin/crm/projects', {
      method: 'POST',
      body: JSON.stringify(projectData)
    })
  }

  async updateProject(projectId: string, projectData: any) {
    return this.request(`/admin/crm/projects/${projectId}`, {
      method: 'PUT',
      body: JSON.stringify(projectData)
    })
  }

  async getActivities() {
    return this.request('/admin/crm/activities')
  }

  async logActivity(activityData: any) {
    return this.request('/admin/crm/activities', {
      method: 'POST',
      body: JSON.stringify(activityData)
    })
  }

  async getCRMAnalytics() {
    return this.request('/admin/crm/analytics')
  }

  // Reports & BI APIs
  async getExecutiveMetrics() {
    return this.request('/admin/reports/executive-metrics')
  }

  async getRevenueAnalysis(timeframe: string) {
    return this.request(`/admin/reports/revenue-analysis?timeframe=${timeframe}`)
  }

  async getProductPerformance(filters: any) {
    return this.request('/admin/reports/product-performance', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async getScheduledReports() {
    return this.request('/admin/reports/scheduled')
  }

  async createScheduledReport(reportData: any) {
    return this.request('/admin/reports/scheduled', {
      method: 'POST',
      body: JSON.stringify(reportData)
    })
  }

  async sendReportNow(reportId: string) {
    return this.request(`/admin/reports/scheduled/${reportId}/send`, {
      method: 'POST'
    })
  }

  async getCustomDashboards() {
    return this.request('/admin/reports/dashboards')
  }

  async createDashboard(dashboardData: any) {
    return this.request('/admin/reports/dashboards', {
      method: 'POST',
      body: JSON.stringify(dashboardData)
    })
  }

  async exportReport(reportType: string, format: string, filters: any) {
    return this.request('/admin/reports/export', {
      method: 'POST',
      body: JSON.stringify({ reportType, format, filters })
    })
  }

  async getPredictiveAnalytics(metric: string, timeframe: string) {
    return this.request(`/admin/reports/predictive?metric=${metric}&timeframe=${timeframe}`)
  }

  // Audit Logs APIs
  async getAuditLogs(filters: any) {
    return this.request('/admin/audit/logs', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async getSecurityEvents(timeframe: string) {
    return this.request(`/admin/audit/security-events?timeframe=${timeframe}`)
  }

  async getSystemChanges(timeframe: string) {
    return this.request(`/admin/audit/system-changes?timeframe=${timeframe}`)
  }

  async getComplianceEvents(timeframe: string) {
    return this.request(`/admin/audit/compliance-events?timeframe=${timeframe}`)
  }

  async searchAuditLogs(searchCriteria: any) {
    return this.request('/admin/audit/search', {
      method: 'POST',
      body: JSON.stringify(searchCriteria)
    })
  }

  async exportAuditLogs(filters: any, format: string) {
    return this.request('/admin/audit/export', {
      method: 'POST',
      body: JSON.stringify({ filters, format })
    })
  }

  async getSavedSearches() {
    return this.request('/admin/audit/saved-searches')
  }

  async saveAuditSearch(searchData: any) {
    return this.request('/admin/audit/saved-searches', {
      method: 'POST',
      body: JSON.stringify(searchData)
    })
  }

  async getAuditStats() {
    return this.request('/admin/audit/stats')
  }

  // System Health APIs
  async getSystemHealth() {
    return this.request('/admin/health/overview')
  }

  async getServiceStatus() {
    return this.request('/admin/health/services')
  }

  async getInfrastructureMetrics() {
    return this.request('/admin/health/infrastructure')
  }

  async getSystemAlerts(filters: any) {
    return this.request('/admin/health/alerts', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async acknowledgeAlert(alertId: string) {
    return this.request(`/admin/health/alerts/${alertId}/acknowledge`, {
      method: 'POST'
    })
  }

  async resolveAlert(alertId: string, notes?: string) {
    return this.request(`/admin/health/alerts/${alertId}/resolve`, {
      method: 'POST',
      body: JSON.stringify({ notes })
    })
  }

  async getPerformanceMetrics(timeframe: string) {
    return this.request(`/admin/health/metrics?timeframe=${timeframe}`)
  }

  async testService(serviceName: string) {
    return this.request(`/admin/health/services/${serviceName}/test`, {
      method: 'POST'
    })
  }

  async scaleInfrastructure(component: string, action: string) {
    return this.request(`/admin/health/infrastructure/${component}/scale`, {
      method: 'POST',
      body: JSON.stringify({ action })
    })
  }

  // Notifications APIs
  async getNotifications(filters: any) {
    return this.request('/admin/notifications', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async sendTestNotification(notificationData: any) {
    return this.request('/admin/notifications/test', {
      method: 'POST',
      body: JSON.stringify(notificationData)
    })
  }

  async getAlertRules() {
    return this.request('/admin/notifications/rules')
  }

  async createAlertRule(ruleData: any) {
    return this.request('/admin/notifications/rules', {
      method: 'POST',
      body: JSON.stringify(ruleData)
    })
  }

  async updateAlertRule(ruleId: string, ruleData: any) {
    return this.request(`/admin/notifications/rules/${ruleId}`, {
      method: 'PUT',
      body: JSON.stringify(ruleData)
    })
  }

  async testAlertRule(ruleId: string) {
    return this.request(`/admin/notifications/rules/${ruleId}/test`, {
      method: 'POST'
    })
  }

  async getNotificationChannels() {
    return this.request('/admin/notifications/channels')
  }

  async configureChannel(channelName: string, config: any) {
    return this.request(`/admin/notifications/channels/${channelName}`, {
      method: 'PUT',
      body: JSON.stringify(config)
    })
  }

  async testChannel(channelName: string) {
    return this.request(`/admin/notifications/channels/${channelName}/test`, {
      method: 'POST'
    })
  }

  async getNotificationTemplates() {
    return this.request('/admin/notifications/templates')
  }

  async createTemplate(templateData: any) {
    return this.request('/admin/notifications/templates', {
      method: 'POST',
      body: JSON.stringify(templateData)
    })
  }

  async updateNotificationSettings(settings: any) {
    return this.request('/admin/notifications/settings', {
      method: 'PUT',
      body: JSON.stringify(settings)
    })
  }

  // Search Index APIs
  async getSearchIndexStats() {
    return this.request('/admin/search/stats')
  }

  async getSearchIndices() {
    return this.request('/admin/search/indices')
  }

  async createIndex(indexData: any) {
    return this.request('/admin/search/indices', {
      method: 'POST',
      body: JSON.stringify(indexData)
    })
  }

  async reindexData(indexName: string, options?: any) {
    return this.request(`/admin/search/indices/${indexName}/reindex`, {
      method: 'POST',
      body: JSON.stringify(options || {})
    })
  }

  async deleteIndex(indexName: string) {
    return this.request(`/admin/search/indices/${indexName}`, {
      method: 'DELETE'
    })
  }

  async getIndexingActivity() {
    return this.request('/admin/search/indexing/activity')
  }

  async getSearchAnalytics(timeframe: string) {
    return this.request(`/admin/search/analytics?timeframe=${timeframe}`)
  }

  async getIndexingQueue() {
    return this.request('/admin/search/queue')
  }

  async prioritizeQueueJob(jobId: string) {
    return this.request(`/admin/search/queue/${jobId}/prioritize`, {
      method: 'POST'
    })
  }

  async cancelQueueJob(jobId: string) {
    return this.request(`/admin/search/queue/${jobId}/cancel`, {
      method: 'DELETE'
    })
  }

  async pauseIndexing() {
    return this.request('/admin/search/indexing/pause', {
      method: 'POST'
    })
  }

  async resumeIndexing() {
    return this.request('/admin/search/indexing/resume', {
      method: 'POST'
    })
  }

  async bulkReindex(options: any) {
    return this.request('/admin/search/bulk-reindex', {
      method: 'POST',
      body: JSON.stringify(options)
    })
  }

  async optimizeSearchQuery(query: string, suggestions: any) {
    return this.request('/admin/search/optimize', {
      method: 'POST',
      body: JSON.stringify({ query, suggestions })
    })
  }

  // Audio Processing APIs
  async getAudioLibrary(filters: any) {
    return this.request('/admin/audio/library', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async uploadAudioFile(fileData: FormData) {
    return this.request('/admin/audio/upload', {
      method: 'POST',
      body: fileData,
      headers: {} // Remove Content-Type for FormData
    })
  }

  async getProcessingQueue() {
    return this.request('/admin/audio/processing/queue')
  }

  async processAudioFile(fileId: string, operations: string[]) {
    return this.request(`/admin/audio/process/${fileId}`, {
      method: 'POST',
      body: JSON.stringify({ operations })
    })
  }

  async generateAudioPlayer(fileId: string, templateId: string, options: any) {
    return this.request('/admin/audio/generate-player', {
      method: 'POST',
      body: JSON.stringify({ fileId, templateId, options })
    })
  }

  async getPlayerTemplates() {
    return this.request('/admin/audio/player-templates')
  }

  async createPlayerTemplate(templateData: any) {
    return this.request('/admin/audio/player-templates', {
      method: 'POST',
      body: JSON.stringify(templateData)
    })
  }

  async getAudioModeration() {
    return this.request('/admin/audio/moderation')
  }

  async moderateAudioContent(fileId: string, action: string, notes?: string) {
    return this.request(`/admin/audio/moderation/${fileId}`, {
      method: 'POST',
      body: JSON.stringify({ action, notes })
    })
  }

  async getAudioStats() {
    return this.request('/admin/audio/stats')
  }

  async updateAudioSettings(settings: any) {
    return this.request('/admin/audio/settings', {
      method: 'PUT',
      body: JSON.stringify(settings)
    })
  }

  async generateEmbedCode(fileId: string, playerType: string, options: any) {
    return this.request('/admin/audio/embed-code', {
      method: 'POST',
      body: JSON.stringify({ fileId, playerType, options })
    })
  }

  // Live Preview APIs
  async getLivePreviews(filters: any) {
    return this.request('/admin/preview/previews', {
      method: 'POST',
      body: JSON.stringify(filters)
    })
  }

  async createLivePreview(productId: string, templateId: string, options: any) {
    return this.request('/admin/preview/create', {
      method: 'POST',
      body: JSON.stringify({ productId, templateId, options })
    })
  }

  async rebuildPreview(previewId: string) {
    return this.request(`/admin/preview/${previewId}/rebuild`, {
      method: 'POST'
    })
  }

  async getPreviewEnvironments() {
    return this.request('/admin/preview/environments')
  }

  async scaleEnvironment(environmentId: string, instances: number) {
    return this.request(`/admin/preview/environments/${environmentId}/scale`, {
      method: 'POST',
      body: JSON.stringify({ instances })
    })
  }

  async getPreviewTemplates() {
    return this.request('/admin/preview/templates')
  }

  async createPreviewTemplate(templateData: any) {
    return this.request('/admin/preview/templates', {
      method: 'POST',
      body: JSON.stringify(templateData)
    })
  }

  async getPreviewAnalytics(timeframe: string) {
    return this.request(`/admin/preview/analytics?timeframe=${timeframe}`)
  }

  async updateSecuritySettings(settings: any) {
    return this.request('/admin/preview/security', {
      method: 'PUT',
      body: JSON.stringify(settings)
    })
  }

  async getPreviewStats() {
    return this.request('/admin/preview/stats')
  }

  async terminatePreviewSession(sessionId: string) {
    return this.request(`/admin/preview/sessions/${sessionId}/terminate`, {
      method: 'DELETE'
    })
  }

  // Integrations APIs
  async getIntegrations() {
    return this.request('/admin/integrations')
  }

  async updateIntegration(service: string, credentials: any) {
    return this.request(`/admin/integrations/${service}`, {
      method: 'PUT',
      body: JSON.stringify(credentials)
    })
  }

  async testIntegration(service: string) {
    return this.request(`/admin/integrations/${service}/test`, {
      method: 'POST'
    })
  }
}

export const apiClient = new ApiClient(API_BASE_URL)