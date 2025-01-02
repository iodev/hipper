import factory from "@hypermode/modus-sdk-as/assembly/models";
import { ClassificationModel, ClassificationInput, ClassificationOutput, ClassifierLabel, ClassifierResult } from "@hypermode/modus-sdk-as/models/experimental/classification";
// import { ClassificationInput, ClassificationOutput, ClassifierResult, ClassificationModel } from "@hypermode/modus-sdk-as/assembly/models";

export function classifyBookmarks(bookmarks: string[]): ClassifierResult[] {
    const model = factory.getModel<ClassificationModel>("distilbert-base-uncased-finetuned-sst-2-english");
    
    // Create input properly - ClassificationInput 
    const input = model.createInput(bookmarks); 
    
    // invoke returns ClassificationOutput which contains an array of ClassifierResult
    const output: ClassificationOutput = model.invoke(input);
    
    return output.predictions;
}