export type OnboardingStep = 
  | 'welcome'
  | 'name'
  | 'company_name'
  | 'company_size'
  | 'funding_stage'
  | 'product_state'
  | 'industry'
  | 'complete';

export interface CompanyProfile {
  name: string;
  companyName: string;
  companySize: string;
  fundingStage: string;
  productState: string;
  industry: string;
}

export interface OnboardingState {
  step: OnboardingStep;
  profile: Partial<CompanyProfile>;
} 