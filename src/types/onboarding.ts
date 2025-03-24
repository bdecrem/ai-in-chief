export type OnboardingStep = 
  | 'company_type'  // real or test company
  | 'name'
  | 'company_name'
  | 'company_description'
  | 'company_size'
  | 'funding_stage'
  | 'product_state'
  | 'complete';

export interface CompanyProfile {
  companyType: 'real' | 'test';
  name: string;
  companyName: string;
  companyDescription: string;
  companySize: string;
  fundingStage: string;
  productState: string;
}

export interface OnboardingState {
  step: OnboardingStep;
  profile: Partial<CompanyProfile>;
} 