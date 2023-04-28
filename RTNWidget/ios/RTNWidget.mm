#import "RTNWidget.h"
#import "RTNWidget.h"

@implementation RTNWidget

RCT_EXPORT_MODULE()

- (NSString *)getHelloWorld {
    return @"Hello World!";
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeWidgetSpecJSI>(params);
}

@end