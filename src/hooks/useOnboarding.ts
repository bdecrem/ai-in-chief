import { useState, useCallback } from 'react';
import { OnboardingState, OnboardingStep, CompanyProfile } from '@/types/onboarding';

const INITIAL_STATE: OnboardingState = {
  step: 'welcome',
  profile: {},
};

export function useOnboarding(ceoName: string) {
  const [state, setState] = useState<OnboardingState>(INITIAL_STATE);

  const getNextQuestion = useCallback((step: OnboardingStep, profile: Partial<CompanyProfile>) => {
    switch (step) {
      case 'welcome':
        return `Hello! I'm ${ceoName}, your AI CEO. I'm here to help guide your business decisions. What's your name?`;
      case 'name':
        return `Nice to meet you, ${profile.name}! What's the name of your company?`;
      case 'company_name':
        return `Great! ${profile.companyName} sounds interesting. How many employees do you currently have?`;
      case 'company_size':
        return `Thanks! What's your current funding stage? (e.g., Pre-seed, Seed, Series A, etc.)`;
      case 'funding_stage':
        return `Got it! What's the current state of your product? (e.g., Idea, MVP, Beta, Live)`;
      case 'product_state':
        return `Last question: What industry is ${profile.companyName} in?`;
      case 'industry':
        return `Perfect! I now have a good understanding of ${profile.companyName}. Let's get started with your business strategy. What would you like to focus on first?`;
      default:
        return '';
    }
  }, [ceoName]);

  const handleUserResponse = useCallback((response: string) => {
    setState(prev => {
      const newProfile = { ...prev.profile };
      
      switch (prev.step) {
        case 'name':
          newProfile.name = response;
          break;
        case 'company_name':
          newProfile.companyName = response;
          break;
        case 'company_size':
          newProfile.companySize = response;
          break;
        case 'funding_stage':
          newProfile.fundingStage = response;
          break;
        case 'product_state':
          newProfile.productState = response;
          break;
        case 'industry':
          newProfile.industry = response;
          break;
      }

      const steps: OnboardingStep[] = ['welcome', 'name', 'company_name', 'company_size', 'funding_stage', 'product_state', 'industry', 'complete'];
      const currentIndex = steps.indexOf(prev.step);
      const nextStep = steps[currentIndex + 1] || 'complete';

      return {
        step: nextStep,
        profile: newProfile,
      };
    });
  }, []);

  const getCurrentQuestion = useCallback(() => {
    return getNextQuestion(state.step, state.profile);
  }, [state.step, state.profile, getNextQuestion]);

  return {
    state,
    handleUserResponse,
    getCurrentQuestion,
    isComplete: state.step === 'complete',
  };
} 